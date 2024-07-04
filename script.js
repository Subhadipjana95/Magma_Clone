function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

loco()

var clutter = "";

document.querySelector("#page2>h1").textContent.split(" ").forEach(function (dets) {
    clutter += `<span> ${dets}</span>`
    document.querySelector("#page2>h1").innerHTML = clutter;
})

gsap.to("#page2>h1>span", {
    scrollTrigger: {
        trigger: `#page2>h1>span`,
        start: `top 85%`,
        end: `bottom 20%`,
        scroller: `#main`,
        scrub: .2
    },
    stagger: .2,
    color: `#ecf2ff`
})

function canvas1() {
    const canvas = document.querySelector("#page3>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
  ./Frames/frames00007.png
  ./Frames/frames00010.png
  ./Frames/frames00013.png
  ./Frames/frames00016.png
  ./Frames/frames00019.png
  ./Frames/frames00022.png
  ./Frames/frames00025.png
  ./Frames/frames00028.png
  ./Frames/frames00031.png
  ./Frames/frames00034.png
  ./Frames/frames00037.png
  ./Frames/frames00040.png
  ./Frames/frames00043.png
  ./Frames/frames00046.png
  ./Frames/frames00049.png
  ./Frames/frames00052.png
  ./Frames/frames00055.png
  ./Frames/frames00058.png
  ./Frames/frames00061.png
  ./Frames/frames00064.png
  ./Frames/frames00067.png
  ./Frames/frames00070.png
  ./Frames/frames00073.png
  ./Frames/frames00076.png
  ./Frames/frames00079.png
  ./Frames/frames00082.png
  ./Frames/frames00085.png
  ./Frames/frames00088.png
  ./Frames/frames00091.png
  ./Frames/frames00094.png
  ./Frames/frames00097.png
  ./Frames/frames00100.png
  ./Frames/frames00103.png
  ./Frames/frames00106.png
  ./Frames/frames00109.png
  ./Frames/frames00112.png
  ./Frames/frames00115.png
  ./Frames/frames00118.png
  ./Frames/frames00121.png
  ./Frames/frames00124.png
  ./Frames/frames00127.png
  ./Frames/frames00130.png
  ./Frames/frames00133.png
  ./Frames/frames00136.png
  ./Frames/frames00139.png
  ./Frames/frames00142.png
  ./Frames/frames00145.png
  ./Frames/frames00148.png
  ./Frames/frames00151.png
  ./Frames/frames00154.png
  ./Frames/frames00157.png
  ./Frames/frames00160.png
  ./Frames/frames00163.png
  ./Frames/frames00166.png
  ./Frames/frames00169.png
  ./Frames/frames00172.png
  ./Frames/frames00175.png
  ./Frames/frames00178.png
  ./Frames/frames00181.png
  ./Frames/frames00184.png
  ./Frames/frames00187.png
  ./Frames/frames00190.png
  ./Frames/frames00193.png
  ./Frames/frames00196.png
  ./Frames/frames00199.png
  ./Frames/frames00202.png
 `;
        return data.split("\n")[index];
    }

    const frameCount = 67;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: .5,
            trigger: `#page3`,
            start: `top 50%`,
            end: `250% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({

        trigger: "#page3",
        pin: true,
        scroller: `#main`,
        start: `top top`,
        end: `250% top`,
        marker: true
    });
}
canvas1()



var clutter = "";

document.querySelector("#page4>h1").textContent.split(" ").forEach(function (dets) {
    clutter += `<span> ${dets}</span>`
    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span", {
    scrollTrigger: {
        trigger: `#page4>h1>span`,
        start: `top 85%`,
        end: `bottom 20%`,
        scroller: `#main`,
        scrub: .2,
    },
    stagger: .2,
    color: `#ecf2ff`
})




function canvas2() {
    const canvas = document.querySelector("#page5>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
  ./Bridges/bridges00004.png
  ./Bridges/bridges00007.png
  ./Bridges/bridges00010.png
  ./Bridges/bridges00013.png
  ./Bridges/bridges00016.png
  ./Bridges/bridges00019.png
  ./Bridges/bridges00022.png
  ./Bridges/bridges00025.png
  ./Bridges/bridges00028.png
  ./Bridges/bridges00031.png
  ./Bridges/bridges00034.png
  ./Bridges/bridges00037.png
  ./Bridges/bridges00040.png
  ./Bridges/bridges00043.png
  ./Bridges/bridges00046.png
  ./Bridges/bridges00049.png
  ./Bridges/bridges00052.png
  ./Bridges/bridges00055.png
  ./Bridges/bridges00058.png
  ./Bridges/bridges00061.png
  ./Bridges/bridges00064.png
  ./Bridges/bridges00067.png
  ./Bridges/bridges00070.png
  ./Bridges/bridges00073.png
  ./Bridges/bridges00076.png
  ./Bridges/bridges00079.png
  ./Bridges/bridges00082.png
  ./Bridges/bridges00085.png
  ./Bridges/bridges00088.png
  ./Bridges/bridges00091.png
  ./Bridges/bridges00094.png
  ./Bridges/bridges00097.png
  ./Bridges/bridges00100.png
  ./Bridges/bridges00103.png
  ./Bridges/bridges00106.png
  ./Bridges/bridges00109.png
  ./Bridges/bridges00112.png
  ./Bridges/bridges00115.png
  ./Bridges/bridges00118.png
  ./Bridges/bridges00121.png
  ./Bridges/bridges00124.png
  ./Bridges/bridges00127.png
  ./Bridges/bridges00130.png
  ./Bridges/bridges00133.png
  ./Bridges/bridges00136.png
  ./Bridges/bridges00139.png
  ./Bridges/bridges00142.png
  ./Bridges/bridges00145.png
  ./Bridges/bridges00148.png
  ./Bridges/bridges00151.png
  ./Bridges/bridges00154.png
  ./Bridges/bridges00157.png
  ./Bridges/bridges00160.png
  ./Bridges/bridges00163.png
 `;
        return data.split("\n")[index];
    }

    const frameCount = 55;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: .5,
            trigger: `#page5`,
            start: `top top`,
            end: `250% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({

        trigger: "#page5",
        pin: true,
        scroller: `#main`,
        start: `top top`,
        end: `250% top`,
        marker: true
    });
}
canvas2()


var clutter = "";

document.querySelector("#page6>h1").textContent.split(" ").forEach(function (dets) {
    clutter += `<span> ${dets}</span>`
    document.querySelector("#page6>h1").innerHTML = clutter;
})

gsap.to("#page6>h1>span", {
    scrollTrigger: {
        trigger: `#page6>h1>span`,
        start: `top 85%`,
        end: `bottom 20%`,
        scroller: `#main`,
        scrub: .2
    },
    stagger: .2,
    color: `#ecf2ff`
})


function canvas3() {
    const canvas = document.querySelector("#page7>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
           ./Assets/0.png
           https://thisismagma.com/assets/home/lore/seq/1.webp?2
           https://thisismagma.com/assets/home/lore/seq/3.webp?2
           https://thisismagma.com/assets/home/lore/seq/2.webp?2
           https://thisismagma.com/assets/home/lore/seq/4.webp?2
           https://thisismagma.com/assets/home/lore/seq/5.webp?2
           https://thisismagma.com/assets/home/lore/seq/6.webp?2
           https://thisismagma.com/assets/home/lore/seq/7.webp?2
           https://thisismagma.com/assets/home/lore/seq/8.webp?2
           https://thisismagma.com/assets/home/lore/seq/9.webp?2
           https://thisismagma.com/assets/home/lore/seq/10.webp?2
           https://thisismagma.com/assets/home/lore/seq/11.webp?2
           https://thisismagma.com/assets/home/lore/seq/12.webp?2
           https://thisismagma.com/assets/home/lore/seq/13.webp?2
           https://thisismagma.com/assets/home/lore/seq/14.webp?2
           https://thisismagma.com/assets/home/lore/seq/15.webp?2
           https://thisismagma.com/assets/home/lore/seq/16.webp?2
           https://thisismagma.com/assets/home/lore/seq/17.webp?2
           https://thisismagma.com/assets/home/lore/seq/18.webp?2
           https://thisismagma.com/assets/home/lore/seq/19.webp?2
           https://thisismagma.com/assets/home/lore/seq/20.webp?2
           https://thisismagma.com/assets/home/lore/seq/21.webp?2
           https://thisismagma.com/assets/home/lore/seq/22.webp?2
           https://thisismagma.com/assets/home/lore/seq/23.webp?2
           https://thisismagma.com/assets/home/lore/seq/24.webp?2
           https://thisismagma.com/assets/home/lore/seq/25.webp?2
           https://thisismagma.com/assets/home/lore/seq/26.webp?2
           https://thisismagma.com/assets/home/lore/seq/27.webp?2
           https://thisismagma.com/assets/home/lore/seq/28.webp?2
           https://thisismagma.com/assets/home/lore/seq/29.webp?2
           https://thisismagma.com/assets/home/lore/seq/30.webp?2
           https://thisismagma.com/assets/home/lore/seq/31.webp?2
           https://thisismagma.com/assets/home/lore/seq/32.webp?2
           https://thisismagma.com/assets/home/lore/seq/33.webp?2
           https://thisismagma.com/assets/home/lore/seq/34.webp?2
           https://thisismagma.com/assets/home/lore/seq/35.webp?2
           https://thisismagma.com/assets/home/lore/seq/36.webp?2
           https://thisismagma.com/assets/home/lore/seq/37.webp?2
           https://thisismagma.com/assets/home/lore/seq/38.webp?2
           https://thisismagma.com/assets/home/lore/seq/39.webp?2
           https://thisismagma.com/assets/home/lore/seq/40.webp?2
           https://thisismagma.com/assets/home/lore/seq/41.webp?2
           https://thisismagma.com/assets/home/lore/seq/42.webp?2
           https://thisismagma.com/assets/home/lore/seq/43.webp?2
           https://thisismagma.com/assets/home/lore/seq/44.webp?2
           https://thisismagma.com/assets/home/lore/seq/45.webp?2
           https://thisismagma.com/assets/home/lore/seq/46.webp?2
           https://thisismagma.com/assets/home/lore/seq/47.webp?2
           https://thisismagma.com/assets/home/lore/seq/48.webp?2
           https://thisismagma.com/assets/home/lore/seq/49.webp?2
           https://thisismagma.com/assets/home/lore/seq/50.webp?2
           https://thisismagma.com/assets/home/lore/seq/51.webp?2
           https://thisismagma.com/assets/home/lore/seq/52.webp?2
           https://thisismagma.com/assets/home/lore/seq/53.webp?2
           https://thisismagma.com/assets/home/lore/seq/54.webp?2
           https://thisismagma.com/assets/home/lore/seq/55.webp?2
           https://thisismagma.com/assets/home/lore/seq/56.webp?2
           https://thisismagma.com/assets/home/lore/seq/57.webp?2
           https://thisismagma.com/assets/home/lore/seq/58.webp?2
           https://thisismagma.com/assets/home/lore/seq/59.webp?2
           https://thisismagma.com/assets/home/lore/seq/60.webp?2
           https://thisismagma.com/assets/home/lore/seq/61.webp?2
           https://thisismagma.com/assets/home/lore/seq/62.webp?2
           https://thisismagma.com/assets/home/lore/seq/63.webp?2
           https://thisismagma.com/assets/home/lore/seq/64.webp?2
           https://thisismagma.com/assets/home/lore/seq/65.webp?2
           https://thisismagma.com/assets/home/lore/seq/66.webp?2
           https://thisismagma.com/assets/home/lore/seq/67.webp?2
           https://thisismagma.com/assets/home/lore/seq/68.webp?2
           https://thisismagma.com/assets/home/lore/seq/69.webp?2
           https://thisismagma.com/assets/home/lore/seq/70.webp?2
           https://thisismagma.com/assets/home/lore/seq/71.webp?2
           https://thisismagma.com/assets/home/lore/seq/72.webp?2
           https://thisismagma.com/assets/home/lore/seq/73.webp?2
           https://thisismagma.com/assets/home/lore/seq/74.webp?2
           https://thisismagma.com/assets/home/lore/seq/75.webp?2
           https://thisismagma.com/assets/home/lore/seq/76.webp?2
           https://thisismagma.com/assets/home/lore/seq/77.webp?2
           https://thisismagma.com/assets/home/lore/seq/78.webp?2
           https://thisismagma.com/assets/home/lore/seq/79.webp?2
           https://thisismagma.com/assets/home/lore/seq/80.webp?2
           https://thisismagma.com/assets/home/lore/seq/81.webp?2
           https://thisismagma.com/assets/home/lore/seq/82.webp?2
           https://thisismagma.com/assets/home/lore/seq/83.webp?2
           https://thisismagma.com/assets/home/lore/seq/84.webp?2
           https://thisismagma.com/assets/home/lore/seq/85.webp?2
           https://thisismagma.com/assets/home/lore/seq/86.webp?2
           https://thisismagma.com/assets/home/lore/seq/87.webp?2
           https://thisismagma.com/assets/home/lore/seq/88.webp?2
           https://thisismagma.com/assets/home/lore/seq/89.webp?2
           https://thisismagma.com/assets/home/lore/seq/90.webp?2
           https://thisismagma.com/assets/home/lore/seq/91.webp?2
           https://thisismagma.com/assets/home/lore/seq/92.webp?2
           https://thisismagma.com/assets/home/lore/seq/93.webp?2
           https://thisismagma.com/assets/home/lore/seq/94.webp?2
           https://thisismagma.com/assets/home/lore/seq/95.webp?2
           https://thisismagma.com/assets/home/lore/seq/96.webp?2
           https://thisismagma.com/assets/home/lore/seq/97.webp?2
           https://thisismagma.com/assets/home/lore/seq/98.webp?2
           https://thisismagma.com/assets/home/lore/seq/99.webp?2
           https://thisismagma.com/assets/home/lore/seq/100.webp?2
           https://thisismagma.com/assets/home/lore/seq/101.webp?2
           https://thisismagma.com/assets/home/lore/seq/102.webp?2
           https://thisismagma.com/assets/home/lore/seq/103.webp?2
           https://thisismagma.com/assets/home/lore/seq/104.webp?2
           https://thisismagma.com/assets/home/lore/seq/105.webp?2
           https://thisismagma.com/assets/home/lore/seq/106.webp?2
           https://thisismagma.com/assets/home/lore/seq/107.webp?2
           https://thisismagma.com/assets/home/lore/seq/108.webp?2
           https://thisismagma.com/assets/home/lore/seq/109.webp?2
           https://thisismagma.com/assets/home/lore/seq/110.webp?2
           https://thisismagma.com/assets/home/lore/seq/111.webp?2
           https://thisismagma.com/assets/home/lore/seq/112.webp?2
           https://thisismagma.com/assets/home/lore/seq/113.webp?2
           https://thisismagma.com/assets/home/lore/seq/114.webp?2
           https://thisismagma.com/assets/home/lore/seq/115.webp?2
           https://thisismagma.com/assets/home/lore/seq/116.webp?2
           https://thisismagma.com/assets/home/lore/seq/117.webp?2
           https://thisismagma.com/assets/home/lore/seq/118.webp?2
           https://thisismagma.com/assets/home/lore/seq/119.webp?2
           https://thisismagma.com/assets/home/lore/seq/120.webp?2
           https://thisismagma.com/assets/home/lore/seq/121.webp?2
           https://thisismagma.com/assets/home/lore/seq/122.webp?2
           https://thisismagma.com/assets/home/lore/seq/123.webp?2
           https://thisismagma.com/assets/home/lore/seq/124.webp?2
           https://thisismagma.com/assets/home/lore/seq/125.webp?2
           https://thisismagma.com/assets/home/lore/seq/126.webp?2
           https://thisismagma.com/assets/home/lore/seq/127.webp?2
           https://thisismagma.com/assets/home/lore/seq/128.webp?2
           https://thisismagma.com/assets/home/lore/seq/129.webp?2
           https://thisismagma.com/assets/home/lore/seq/130.webp?2
           https://thisismagma.com/assets/home/lore/seq/131.webp?2
           https://thisismagma.com/assets/home/lore/seq/132.webp?2
           https://thisismagma.com/assets/home/lore/seq/133.webp?2
           https://thisismagma.com/assets/home/lore/seq/134.webp?2
           https://thisismagma.com/assets/home/lore/seq/135.webp?2
           https://thisismagma.com/assets/home/lore/seq/136.webp?2
        `;
        return data.split("\n")[index];
    }

    const frameCount = 137;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: .5,
            trigger: `#page7`,
            start: `top top`,
            end: `250% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({

        trigger: "#page7",
        pin: true,
        scroller: `#main`,
        start: `top top`,
        end: `250% top`,
        marker: true
    });
}
canvas3()

gsap.to(".page7-cir",{
    scrollTrigger:{
        trigger:`.page7-cir`,
        start:`top 15%`,
        end:`bottom -100%`,
        scroller:`#main`,
        scrub:.5,
    },
    scale:7,
    opacity: 1
})
gsap.to(".page7-cir-inner",{
    scrollTrigger:{
        trigger:`.page7-cir-inner`,
        start:`top 20%`,
        end:`bottom -100%`,
        scroller:`#main`,
        scrub:.5,
    },
    opacity: 1
})
gsap.to("#page7>video",{
    scrollTrigger:{
        trigger:`#page7>video`,
        start:`98% -35%`,
        end:`98% -60%`,
        scroller:`#main`,
        scrub:.5,
    },
    scale:1,
    opacity: 1,
    zIndex: 9
})
/*
Task:-> Magma DDT Rotate korate hobe scrollTrigger lagiye...(<Span> diye chesta korbo vab6i..!)
*/