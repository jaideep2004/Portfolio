import React from "react";
import "./monitor.css";

const Monitor = () => {
	return (
		<div>
			<div id='contain1'>
				<div id='screenborder'>
					<div id='screen'>
						<div id='sidescreen'>
							<div id='tpbar'>
								<span>.</span>
							</div>
							<div className='screenopt'>
								<div className='opt1'></div>
								<div className='opt2'></div>
							</div>
							<div className='screenopt'>
								<div className='opt1'></div>
								<div className='opt2'></div>
							</div>
							<div className='screenopt'>
								<div className='opt1'></div>
								<div className='opt2'></div>
							</div>
							<div className='screenopt'>
								<div className='opt1'></div>
								<div className='opt2'></div>
							</div>
							<div className='screenopt'>
								<div className='opt1'></div>
								<div className='opt2'></div>
							</div>
						</div>

						<div id='mainscreen'>
							<div id='scrollcontain'>
								<div id='scroll1'>
									<i
										class='fa-solid fa-file-image fa-xl'
										style={{ color: "cyan" }}></i>
								</div>
								<div id='scroll2'>
									<i
										class='fa-solid fa-code fa-xl'
										style={{ color: "cyan" }}></i>
								</div>
								<div id='scroll3'>
									<i
										class='fa-solid fa-bars fa-xl'
										style={{ color: "cyan" }}></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='screenstand'></div>
				<div className='bottomstand'></div>
				<div className="bottom2"></div>
			</div>
		</div>
	);
};

export default Monitor;
