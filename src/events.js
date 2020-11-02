const events = [
	{
		id: 1,
		img_url: 'https://in.bmscdn.com/Events/moviecard/sunburn-club-card-2020-2021-et00130038-2020-5-2-t-21-38-13.jpg',
		title: 'MUSIC',
		cardContent: 'Lorem ipsumasds adsad',
		price: '350',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec justo nec diam aliquet mollis id in leo. Nulla feugiat rhoncus leo ut sagittis. Praesent in mi eget turpis auctor facilisis. Donec malesuada fringilla leo, nec pulvinar arcu gravida sed. Sed eu arcu nec urna cursus sodales eu quis leo. Nunc quis lacus quis massa facilisis aliquet. Cras vestibulum dictum nisi, et laoreet ante dignissim sit amet. Maecenas maximus est erat, et tristique mauris placerat ut. Cras nec augue tincidunt, luctus odio id, vulputate orci. Sed odio quam, porttitor non imperdiet at, convallis eu libero. Etiam id suscipit metus, vitae molestie eros. Donec interdum ex erat, nec lacinia quam ultrices lacinia. Fusce sodales est est, ac dictum lectus consectetur quis. '
	},
	{
		id: 2,
		img_url: 'https://img.freepik.com/free-vector/stand-up-comedy-show-neon-sign-blue-microphone-brick-wall_1262-13628.jpg?size=626&ext=jpg',
		title: 'COMEDY',
		cardContent: 'Lorem ipsum nice',
		price: '400',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec justo nec diam aliquet mollis id in leo. . '
	},
	{
		id: 3,
		img_url: 'https://media.timeout.com/images/105202325/630/472/image.jpg',
		title: 'THEATRE',
		cardContent: 'Lorem ipsum and ipsum lorem',
		price: '350',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec justo nec diam aliquet mollis id in leo. Nulla feugiat rhoncus leo ut sagittis. Praesent in mi eget turpis auctor facilisis. Donec malesuada fringilla leo, nec pulvinar arcu gravida sed. Sed eu arcu nec urna cursus sodales eu quis leo. Nunc quis lacus quis massa facilisis aliquet. Cras vestibulum dictum nisi, et laoreet ante dignissim sit amet. Maecenas maximus est erat, et tristique mauris placerat ut. Cras nec augue tincidunt, luctus odio id, vulputate orci. Sed odio quam, porttitor non imperdiet at, convallis eu libero. Etiam id suscipit metus, vitae molestie eros. Donec interdum ex erat, nec lacinia quam ultrices lacinia. Fusce sodales est est, ac dictum lectus consectetur quis. '
	},
	{
		id: 4,
		img_url: 'https://media.istockphoto.com/photos/acoustic-guitar-picture-id173240169?k:6&m:173240169&s:612x612&w:0&h:EsjT2PtVHZRoI-VxOHEzQhUD6YKDBgZmGcQTpmwjJZI:',
		title: 'MUSIC',
		cardContent: 'asdhbdhkjbqwdilewbuiewbf',
		price: '350',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec justo nec diam aliquet mollis id in leo. Nulla feugiat rhoncus leo ut sagittis. Praesent in mi eget turpis auctor facilisis. Donec malesuada fringilla leo, nec pulvinar arcu gravida sed. Sed eu arcu nec urna cursus sodales eu quis leo. Nunc quis lacus quis massa facilisis aliquet. Cras vestibulum dictum nisi, et laoreet ante dignissim sit amet. Maecenas maximus est erat, et tristique mauris placerat ut. Cras nec augue tincidunt, luctus odio id, vulputate orci. Sed odio quam, porttitor non imperdiet at, convallis eu libero. Etiam id suscipit metus, vitae molestie eros. Donec interdum ex erat, nec lacinia quam ultrices lacinia. Fusce sodales est est, ac dictum lectus consectetur quis. '
	},
	{
		id: 5,
		img_url: 'https://media.istockphoto.com/photos/acoustic-guitar-picture-id173240169?k:6&m:173240169&s:612x612&w:0&h:EsjT2PtVHZRoI-VxOHEzQhUD6YKDBgZmGcQTpmwjJZI:',
		title: 'MUSIC',
		cardContent: 'asdhbdhkjbqwdilewbuiewbf',
		price: '350',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec justo nec diam aliquet mollis id in leo. Nulla feugiat rhoncus leo ut sagittis. Praesent in mi eget turpis auctor facilisis. Donec malesuada fringilla leo, nec pulvinar arcu gravida sed. Sed eu arcu nec urna cursus sodales eu quis leo. Nunc quis lacus quis massa facilisis aliquet. Cras vestibulum dictum nisi, et laoreet ante dignissim sit amet. Maecenas maximus est erat, et tristique mauris placerat ut. Cras nec augue tincidunt, luctus odio id, vulputate orci. Sed odio quam, porttitor non imperdiet at, convallis eu libero. Etiam id suscipit metus, vitae molestie eros. Donec interdum ex erat, nec lacinia quam ultrices lacinia. Fusce sodales est est, ac dictum lectus consectetur quis. '
	},
	{
		id: 6,
		img_url: 'https://media.istockphoto.com/photos/acoustic-guitar-picture-id173240169?k:6&m:173240169&s:612x612&w:0&h:EsjT2PtVHZRoI-VxOHEzQhUD6YKDBgZmGcQTpmwjJZI:',
		title: 'MUSIC',
		cardContent: 'asdhbdhkjbqwdilewbuiewbf',
		price: '350',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec justo nec diam aliquet mollis id in leo. Nulla feugiat rhoncus leo ut sagittis. Praesent in mi eget turpis auctor facilisis. Donec malesuada fringilla leo, nec pulvinar arcu gravida sed. Sed eu arcu nec urna cursus sodales eu quis leo. Nunc quis lacus quis massa facilisis aliquet. Cras vestibulum dictum nisi, et laoreet ante dignissim sit amet. Maecenas maximus est erat, et tristique mauris placerat ut. Cras nec augue tincidunt, luctus odio id, vulputate orci. Sed odio quam, porttitor non imperdiet at, convallis eu libero. Etiam id suscipit metus, vitae molestie eros. Donec interdum ex erat, nec lacinia quam ultrices lacinia. Fusce sodales est est, ac dictum lectus consectetur quis. '
	},
	{
		id: 7,
		img_url: 'https://media.istockphoto.com/photos/acoustic-guitar-picture-id173240169?k:6&m:173240169&s:612x612&w:0&h:EsjT2PtVHZRoI-VxOHEzQhUD6YKDBgZmGcQTpmwjJZI:',
		title: 'MUSIC',
		cardContent: 'asdhbdhkjbqwdilewbuiewbf',
		price: '350',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec justo nec diam aliquet mollis id in leo. Nulla feugiat rhoncus leo ut sagittis. Praesent in mi eget turpis auctor facilisis. Donec malesuada fringilla leo, nec pulvinar arcu gravida sed. Sed eu arcu nec urna cursus sodales eu quis leo. Nunc quis lacus quis massa facilisis aliquet. Cras vestibulum dictum nisi, et laoreet ante dignissim sit amet. Maecenas maximus est erat, et tristique mauris placerat ut. Cras nec augue tincidunt, luctus odio id, vulputate orci. Sed odio quam, porttitor non imperdiet at, convallis eu libero. Etiam id suscipit metus, vitae molestie eros. Donec interdum ex erat, nec lacinia quam ultrices lacinia. Fusce sodales est est, ac dictum lectus consectetur quis. '
	},
	{
		id: 8,
		img_url: 'https://media.istockphoto.com/photos/acoustic-guitar-picture-id173240169?k:6&m:173240169&s:612x612&w:0&h:EsjT2PtVHZRoI-VxOHEzQhUD6YKDBgZmGcQTpmwjJZI:',
		title: 'MUSIC',
		cardContent: 'asdhbdhkjbqwdilewbuiewbf',
		price: '350',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec justo nec diam aliquet mollis id in leo. Nulla feugiat rhoncus leo ut sagittis. Praesent in mi eget turpis auctor facilisis. Donec malesuada fringilla leo, nec pulvinar arcu gravida sed. Sed eu arcu nec urna cursus sodales eu quis leo. Nunc quis lacus quis massa facilisis aliquet. Cras vestibulum dictum nisi, et laoreet ante dignissim sit amet. Maecenas maximus est erat, et tristique mauris placerat ut. Cras nec augue tincidunt, luctus odio id, vulputate orci. Sed odio quam, porttitor non imperdiet at, convallis eu libero. Etiam id suscipit metus, vitae molestie eros. Donec interdum ex erat, nec lacinia quam ultrices lacinia. Fusce sodales est est, ac dictum lectus consectetur quis. '
	},
	{
		id: 9,
		img_url: 'https://media.istockphoto.com/photos/acoustic-guitar-picture-id173240169?k:6&m:173240169&s:612x612&w:0&h:EsjT2PtVHZRoI-VxOHEzQhUD6YKDBgZmGcQTpmwjJZI:',
		title: 'MUSIC',
		cardContent: 'asdhbdhkjbqwdilewbuiewbf',
		price: '350',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec justo nec diam aliquet mollis id in leo. Nulla feugiat rhoncus leo ut sagittis. Praesent in mi eget turpis auctor facilisis. Donec malesuada fringilla leo, nec pulvinar arcu gravida sed. Sed eu arcu nec urna cursus sodales eu quis leo. Nunc quis lacus quis massa facilisis aliquet. Cras vestibulum dictum nisi, et laoreet ante dignissim sit amet. Maecenas maximus est erat, et tristique mauris placerat ut. Cras nec augue tincidunt, luctus odio id, vulputate orci. Sed odio quam, porttitor non imperdiet at, convallis eu libero. Etiam id suscipit metus, vitae molestie eros. Donec interdum ex erat, nec lacinia quam ultrices lacinia. Fusce sodales est est, ac dictum lectus consectetur quis. '
	},
	{
		id: 10,
		img_url: 'https://media.istockphoto.com/photos/acoustic-guitar-picture-id173240169?k:6&m:173240169&s:612x612&w:0&h:EsjT2PtVHZRoI-VxOHEzQhUD6YKDBgZmGcQTpmwjJZI:',
		title: 'MUSIC',
		cardContent: 'asdhbdhkjbqwdilewbuiewbf',
		price: '350',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec justo nec diam aliquet mollis id in leo. Nulla feugiat rhoncus leo ut sagittis. Praesent in mi eget turpis auctor facilisis. Donec malesuada fringilla leo, nec pulvinar arcu gravida sed. Sed eu arcu nec urna cursus sodales eu quis leo. Nunc quis lacus quis massa facilisis aliquet. Cras vestibulum dictum nisi, et laoreet ante dignissim sit amet. Maecenas maximus est erat, et tristique mauris placerat ut. Cras nec augue tincidunt, luctus odio id, vulputate orci. Sed odio quam, porttitor non imperdiet at, convallis eu libero. Etiam id suscipit metus, vitae molestie eros. Donec interdum ex erat, nec lacinia quam ultrices lacinia. Fusce sodales est est, ac dictum lectus consectetur quis. '
	},
	{
		id: 11,
		img_url: 'https://media.istockphoto.com/photos/acoustic-guitar-picture-id173240169?k:6&m:173240169&s:612x612&w:0&h:EsjT2PtVHZRoI-VxOHEzQhUD6YKDBgZmGcQTpmwjJZI:',
		title: 'MUSIC',
		cardContent: 'asdhbdhkjbqwdilewbuiewbf',
		price: '350',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec justo nec diam aliquet mollis id in leo. Nulla feugiat rhoncus leo ut sagittis. Praesent in mi eget turpis auctor facilisis. Donec malesuada fringilla leo, nec pulvinar arcu gravida sed. Sed eu arcu nec urna cursus sodales eu quis leo. Nunc quis lacus quis massa facilisis aliquet. Cras vestibulum dictum nisi, et laoreet ante dignissim sit amet. Maecenas maximus est erat, et tristique mauris placerat ut. Cras nec augue tincidunt, luctus odio id, vulputate orci. Sed odio quam, porttitor non imperdiet at, convallis eu libero. Etiam id suscipit metus, vitae molestie eros. Donec interdum ex erat, nec lacinia quam ultrices lacinia. Fusce sodales est est, ac dictum lectus consectetur quis. '
	},
	{
		id: 12,
		img_url: 'https://media.istockphoto.com/photos/acoustic-guitar-picture-id173240169?k:6&m:173240169&s:612x612&w:0&h:EsjT2PtVHZRoI-VxOHEzQhUD6YKDBgZmGcQTpmwjJZI:',
		title: 'MUSIC',
		cardContent: 'asdhbdhkjbqwdilewbuiewbf',
		price: '350',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec justo nec diam aliquet mollis id in leo. Nulla feugiat rhoncus leo ut sagittis. Praesent in mi eget turpis auctor facilisis. Donec malesuada fringilla leo, nec pulvinar arcu gravida sed. Sed eu arcu nec urna cursus sodales eu quis leo. Nunc quis lacus quis massa facilisis aliquet. Cras vestibulum dictum nisi, et laoreet ante dignissim sit amet. Maecenas maximus est erat, et tristique mauris placerat ut. Cras nec augue tincidunt, luctus odio id, vulputate orci. Sed odio quam, porttitor non imperdiet at, convallis eu libero. Etiam id suscipit metus, vitae molestie eros. Donec interdum ex erat, nec lacinia quam ultrices lacinia. Fusce sodales est est, ac dictum lectus consectetur quis. '
	},
	{
		id: 13,
		img_url: 'https://media.istockphoto.com/photos/acoustic-guitar-picture-id173240169?k:6&m:173240169&s:612x612&w:0&h:EsjT2PtVHZRoI-VxOHEzQhUD6YKDBgZmGcQTpmwjJZI:',
		title: 'MUSIC',
		cardContent: 'asdhbdhkjbqwdilewbuiewbf',
		price: '350',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec justo nec diam aliquet mollis id in leo. Nulla feugiat rhoncus leo ut sagittis. Praesent in mi eget turpis auctor facilisis. Donec malesuada fringilla leo, nec pulvinar arcu gravida sed. Sed eu arcu nec urna cursus sodales eu quis leo. Nunc quis lacus quis massa facilisis aliquet. Cras vestibulum dictum nisi, et laoreet ante dignissim sit amet. Maecenas maximus est erat, et tristique mauris placerat ut. Cras nec augue tincidunt, luctus odio id, vulputate orci. Sed odio quam, porttitor non imperdiet at, convallis eu libero. Etiam id suscipit metus, vitae molestie eros. Donec interdum ex erat, nec lacinia quam ultrices lacinia. Fusce sodales est est, ac dictum lectus consectetur quis. '
	}
];

export default events;