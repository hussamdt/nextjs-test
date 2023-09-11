import Image from 'next/image';
import 'tailwindcss/tailwind.css';


const loremText = "Nullam sit amet pretium quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ornare eget odio vel bibendum. Proin volutpat tempor pulvinar. Vestibulum non nisi dignissim, vehicula sapien nec, rutrum augue. In ultrices diam sem, ac bibendum sem lacinia ut. Nulla eget pharetra massa. Proin rutrum ligula non dolor interdum, eu molestie dolor congue. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.";
const shortLoremText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0">
      <section className='pt-12 pb-24 px-40 w-full text-center'>
        <h2 className='md:text-3xl font-bold text-primary-700 md:p-12'>Next JS Test</h2>
        <p className='text-lg'>{loremText}</p>
      </section>
      <section className='pt-12 pb-72 px-40 w-full text-center bg-beige-600'>
        <h1 className='text-3xl font-bold p-12'>Title Goes Here</h1>
        <p className='text-lg text-left'>{loremText}</p>
      </section>
      <section className='py-0 px-40 w-full min-h-max h-72 flex items-center justify-center'>
        <div className='grid grid-cols-4 gap-4 -mt-72 h-72 relative'>
          <SingleCard content={shortLoremText} withEffect/>
          <SingleCard content={shortLoremText} withEffect/>
          <SingleCard content={shortLoremText} withEffect/>
          <SingleCard content={shortLoremText} withEffect/>
        </div>
      </section>

      <section className='pt-24 px-40 flex max-h-min h-full w-full text-center items-center justify-center bg-beige-600'>
        <div className='grid grid-cols-2 gap-16 px-16 max-h-min min-w-fit -m-16'>
          <div className='py-12 max-w-fit'>
            <h1 className='text-3xl text-left font-bold'>Title Goes Here</h1>
            <p className='text-lg text-left py-12 max-w-fit'>{shortLoremText}</p>
          </div>

          <div>
            {/* inner grid */}
            <div className='grid grid-cols-2 grid-flow-row gap-4 max-h-min min-w-fit'>
              <div className='grid grid-rows-2 gap-10 mt-12 relative'>
                {/* inner left grid */}
                <SingleCard content={shortLoremText} cardNumber={1} />

                <SingleCard content={shortLoremText} cardNumber={2} />
              </div>
              <div className='grid grid-rows-2 gap-10 mb-12 relative'>
                {/* inner right grid */}
                <SingleCard content={shortLoremText} cardNumber={3} />
                <SingleCard content={shortLoremText} cardNumber={4} />
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className='h-72'>
        
      </section>

    </main>
  );
}


const SingleCard = (props:any)=>{
  const {withEffect,cardNumber, title, content} = props
  
  const styledNumber= (
    <div className='text-3xl font-bold text-greydark-200 m-2'>
      {cardNumber}
    </div>
  )

  return(
        <div className={`bg-white max-w-xs rounded overflow-hidden shadow-lg hover:z-50 ${withEffect && 'transform transition duration-500 hover:scale-110'}`}>
          <div className='flex w-full justify-end'>
            {cardNumber && styledNumber}
            {!cardNumber &&
              <div className="w-0 h-0 -mt-1 mr-1
                border-t-[20px] border-t-transparent
                border-l-[20px] border-l-primary-500
                border-b-[20px] border-b-transparent
                -rotate-45"
              >
              </div>
            }
          </div>
          <div className="px-6 py-4">
            {title && <div className="font-bold text-xl mb-2">The Coldest Sunset</div>}
            <p className="text-gray-700 text-base pt-1">
              {content}
            </p>
         </div>

    </div>

  )
}