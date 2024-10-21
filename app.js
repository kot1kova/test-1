gsap.registerPlugin(ScrollTrigger)

const { innerHeight } = window

gsap.to('.scale__item', {
	scale: 5,
	duration: 40,
	ease: 'power2.inOut',
	scrollTrigger: {
		trigger: '#scale',
		start: 'top top',
		// end: 'bottom center',
		pin: true,
		end: `+=${innerHeight * 1.3}`,
		scrub: 3,
		markers: true,
	},
})

gsap.to('.scale__info', {
	scale: 5,
	duration: 40,
	ease: 'power2.inOut',
	scrollTrigger: {
		trigger: '.scale__item:last-child',
		start: 'top top',
		// end: 'bottom center',
		pin: true,
		end: `+=${innerHeight * 1.3}`,
		scrub: 3,
		markers: true,
	},
})

// gsap.utils.toArray('.scale__item').forEach((scale__item, i) => {
// 	ScrollTrigger.create({
// 		trigger: '.scale',
// 		start: 'top top',
// 		pin: true,
// 		scrub: 3,
// 		scale: 5,
// 		duration: 40,
// 		ease: 'power2.inOut',
// 	})
// })
