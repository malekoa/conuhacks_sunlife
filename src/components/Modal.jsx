function Modal(props) {
    return (
        <div className="fixed flex justify-center items-center top-0 z-10 w-full h-screen bg-black bg-opacity-90" onClick={() => props.setModalActive(false)}>
            <div className="flex flex-col w-full md:w-1/2 bg-gray-100 rounded-sm space-y-4 p-4">
                {/* modal title from props.title */}
                <div className="flex w-full justify-center items-center">
                    <span className="text-2xl font-bold">{props.title}</span>
                </div>
                {/* modal text from props.text */}
                <div className="flex w-full justify-start items-center">
                    <span className="">{props.text}</span>
                </div>

            </div>

        </div>
    );
}

export default Modal;