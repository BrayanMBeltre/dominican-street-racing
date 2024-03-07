import { useEffect, useState } from "react";

const GameOver = () => {
	return (
		<div>
			<h1>Game Over</h1>
		</div>
	);
};

export const GameUI = () => {
	const isGameOver = localStorage.getItem("isGameOver") === "tue";

	const [life, setLife] = useState(0);

	useEffect(() => {
		const _life = localStorage.getItem("life");

		_life && setLife(parseInt(_life) || 0);
	}, [localStorage.getItem("life")]);

	if (isGameOver) return <GameOver />;

	return (
		<div>
			<span
				className="absolute right-10 top-10 font font-bold text-red-500"
				id="life-bar"
			>
				Life: {life}
			</span>
		</div>
	);
};
