# Super-Deferred: Rendering a Black Hole Real-Time In-Browser

## Motivation

I'm into graphics programming, so when I was putting together this site, I knew I wanted to prominently feature some artwork or shader trick. In this article, I'll break down the spinning black hole background I cooked up for my homepage!

The reason I find graphics programming so exciting is the way it instills you with a passion for, like, the hidden beauty of the natural world, and then immediately tells you to tear it apart and rebuild it out of algorithms and "good-enough" shortcuts. It's a very rich intersection of technical problem-solving architecture and art.

With that in mind, our strategy for creating a real-time black hole will be to analyse the optics[FN:Light science.] of the situation, simulate that situation inside the computer, and then use tricks and shortcuts to get it down to real-time.[FN:We could totally not aim for real-time and render, like, a gif to play in the background. I chose not to do this because: a) I hate when a website is slow to load because it's downloading a video, b) I think there's something thrilling about looking at an effect and knowing it's being computed on *your* computer, and c) I'm looking for an excuse to do a cool graphics project!]


## Gravitational Lensing

So. Black holes are pretty big, huh. Lot of mass going on in there.

When you put that much mass in one spot, General Relativity says that it curves space, meaning that straight lines in a black hole's vicinity are no longer straight. I don't intuitively understand this space curving business, so I conceptualise it as "the black hole exerts a gravitational pull on the light," - a laser beam shot past a black hole will curve towards and around it.

This curving of light is called Gravitational Lensing.

Taking gravitational lensing into account, let's think about what the black hole would look like from a camera's perspective. I've decided to give our black hole a big glowing accretion disk, so let's place the camera a little bit above that, looking down at the black hole.

TODO our camera position

(A quick aside, in graphics programming we usually conceptualise light rays in reverse, originating from the camera and bouncing around in the world until they hit a light source. The maths works the same, it just means we can efficiently narrow our search to only beams of light that pass through the camera's lens and hit the sensor.)

Light rays that give the black hole's curved space a wide berth will act basically as we expect - stars far away from the black hole will look normal, as will the parts of the accretion disk closer to the camera.

TODO glancing rays are fine

Light rays that graze a little closer to the black hole will curve around it, meaning that light rays we might not expect to hit the accretion disk will. Like a mirage, we'll see false images of the accretion disk above and below the black hole. (Interestingly, the mirage below the accretion disk will be inverted, with the accretion disk spinning the wrong way.)

TODO grazing rays show us a mirage

Finally, light rays that graze too close to the black hole will get sucked up by it, spiralling into event horizon, the black sphere around the center of the black hole. This will have the effect of magnifying the appearance of the event horizon.

TODO closer rays magnify our event horizon

TODO SKETCH OF WHAT BLACK HOLE LOOKS LIKE

> A quick aside here! A person very close to the black hole's event horizon, close enough to be inside its magnified image, would see it rise up, *above the horizon*, enveloping them as they fell into it. Scary stuff.

TODO DIAGRAM OF FALLING IN

## Path Tracing

Alrighty, we have a rudimentary understanding of gravitational lensing, we have an expectation of what the black hole should look like, so now we're looking for a computer graphics technique that can simulate these curved paths that light rays take around a black hole.

Path-tracing is a solid contender here - it's a very common technique that simulates these light rays I've been talking about, so there's a lot of off-the-shelf software we can make use of. (I used Blender!) We just need to figure out how to bend the light.

Now, Blender is not built to handle curved spacetime, but it does have tools for simulating simulating bent light. Specifically, Blender understands refraction - it may not be able to do gravitational lensing out of the box but it can simulate mundane lenses just fine.

When a light ray passes into a medium with a higher index of refraction, it gets bent towards the surface normal of the boundary. Blender doesn't worry about boundaries between mediums, it just models objects by their surfaces, and will happily bend any light ray that hits a surface with a refractive material.

TODO diagram of refraction

This means that if we layer hundreds of concentric spheres with refractive materials, any light that passes through will progressively get bent towards the center - because the surface normal at any point on a sphere points down into it.[FN:Technically the normal points up and away, but we use whichever vector (either the normal or its inverse) is closer to the vector of our ray's direction. So on entering a sphere, we'll use the inverted normal, which will point down into its center.]

TODO diagram of layered spheres

This is what we want! We've got Blender mimicking a curved space that guides light rays towards some central point. At this point I'd be worried about the accuracy of our simulation, setting up the perfect spacing and index of refraction on the spheres to correctly mimick gravitational lensing, while avoiding artefacts. Luckily for us, I found a youtube tutorial that has the physics all figured out! (TODO LINK IT)

TODO render result

So there we go, we've successfully rendered a black hole that looks both accurate and freaking gorgeous! Unfortunately, it took a [TODO TIME] to render a single frame on a machine with a GPU, and we're aiming for real-time, on, like, any device that is likely to load our website.

It turns out path tracing is an expensive[FN:In graphics, "expensive" means slow, because the cost we're trying to minimise is runtime.] technique, and our fully volumetric accretion disk isn't doing us any favours. If we want to get this real-time, we'll want a different technique.[FN:We could totally write a black hole ray-tracer or ray-marcher designed from the ground up to be real-time, but I'm aiming for a small scale project targeting abritray hardware, so I went with a different strategy.]

## Deferred Rendering

Let's have a look at how real-time rendering is usually done, and see if we can learn something applicable to our problem.

Path-tracing is pretty uncommon in real-time - it's an oft-recursive ray-triangle intersection for each triangle in the scene, for each pixel on the screen, it's crazy! It's only become more widespread recently with specialist hardware designed for the job, which is definitely not what we're targeting.

Usually, real-time rendering uses a technique called rasterisation. We use a matrix multiplication to map our scene's vertices from world-coordinates to screen-coordinates, and then draw each triangle to the screen, ordered by their distance to the camera, so that closer things are drawn on top of farther things. This way, we get correct perspective and occlusion without ever having to cast a ray.

This technique isn't super applicable to our situation, because gravitational lensing means that the mapping of world-space to screen-space is a little more complicated than one matrix multiplication. I guess we could devise a custom world-space to screen-space function that takes gravitational lensing into account, but that seems a little more involved than what I'm hoping for, so let's go back to the books.

Rasterisation is not without its problems. Since every triangle gets drawn, one on top of the other, sometimes processing power is wasted doing shading calculations for fully occluded objects. To avoid this, many modern rasterisation engines use a technique called Deferred Rendering.[FN:In contrast to our previous rasterisation workflow, which is called Forward Rendering.]

Rather than doing all the shading calculations for each triangle as we go, we instead just record some information about each triangle as we draw it not onto the screen but into a buffer called the gbuffer[FN:Gbuffer is short for "geometry buffer".]. We can keep track of information like each pixel's distance to the camera, surface normal, UV coordinates[FN:I recognise that usually UV details aren't written into the gbuffer, and that it would in fact be a bad idea to do so, but bear with me here - it's relevant to my strategy.], etc. Then, once we've finished rasterising, we can use the data in the gbuffer to perform our shading calculations only for the geometry that will actually make it into the finished image.

This technique gives me an idea...


## Super-Deferred

Using our accurate but slow Blender model of a gravitational lens from earlier, I've constructed my own faux-gbuffer.

(TODO IMAGE!)

The red and green channels display the accretion disk's UV coordinates - coordinates in the disk's texture space. This means that we can use the red and green channels as indexes[FN:Not indices! According to Microsoft's style guide, at least.] to sample an accretion disk texture.

We can also apply a matrix multiplication to the red and green channels to rotate them around the point (0.5, 0.5) - this is how we make the accretion disk spin!

The blue channel is a mask that we multiply onto our render, just to soften edges and avoid aliasing artefacts.

So that's the strategy! We've essentially deferred our rendering so far that the gbuffer and final image are being computed on different machines, so the only computation happening on the end machine is, like, two texture lookups.

Does this count as rendering a black hole in real-time? It's certainly not a very flexible system, as it requires a static camera angle and a completely flat and opaque accretion disk. This wouldn't be a very useful general-purpose black hole rendering tool.

But as set dressing? As a magic trick? I think it fulfills the requirements of the situation - it looks great, runs well, and I learned a lot in the process of making it.

I think it's beautiful!
