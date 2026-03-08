type Props = {
	children: React.ReactNode;
};

function MainLayout({ children }: Props) {
	return (
		<>
			<main className="h-full">
				<div className="bg-red-500 h-full">{children}</div>
			</main>
		</>
	);
}

export default MainLayout;
