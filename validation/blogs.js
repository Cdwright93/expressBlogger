const validateBlogData = (blogData) => {
	const categories = ["LOREM", "IPSUM", "DOLOR", "SIT", "AMET"];

	if (blogData.title === undefined || blogData.title !== typeof "string") {
		// title is required and it must be a string
		return {
			isValid: false,
			message: "Title is required and it must be a string",
		};
		if (blogData.title.length > 39) {
			return {
				isValid: false,
				message: "Title must be less than 40 characters",
			};
		}
	}
	if (blogData.text === undefined || blogData.text !== typeof "string") {
		return {
			isValid: false,
			message: "Text is required and it must be a string",
		};
	}
	if (blogData.author === undefined || blogData !== typeof "string") {
		return {
			isValid: false,
			message: "Last name is required and it must be a string",
		};
		if (blogData.author.length > 39) {
			return {
				isValid: false,
				message: "Author must be less than 40 characters",
			};
		}
	}
	if (blogData.category.length > 0 && blogData.category !== undefined) {
		category.forEach((category) => {
			if (blogData.category.toUpperCase() === category) {
				blogData.category = category;
			}
		});
		//-------------------//
		return {
			isValid: true,
			message: "Success, blog created.",
		};
	}
};

module.exports = {
	validateBlogData,
};
