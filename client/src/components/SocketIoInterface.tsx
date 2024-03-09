export default function SocketIoInterface() {
    return (
        <div className=' flex items-center justify-center flex-col gap-y-4  px-4 '>
            <div className='bg-white p-4 w-[80%]'>
                <form className='flex flex-col gap-y-6 p-6 '>
                    <h1>Web Socket : </h1>

                    <input
                        type='text'
                        name='message'
                        id=''
                        className='border-2 p-4 '
                        placeholder='type your message here'
                        required
                    />
                    <button
                        className='btn-primary '
                        type='submit'
                    >
                        send message
                    </button>
                    <button
                        className='btn-secondary'
                        type='button'
                    >
                        close connection
                    </button>
                    <h2>server response : </h2>
                    <ul></ul>
                </form>
            </div>
        </div>
    );
}
