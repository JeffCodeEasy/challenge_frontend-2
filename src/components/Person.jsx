
export const Person = ({image, name, description }) => {
  return (
    <div class="w-full sm:w-1/2 md:w-full lg:w-full mb-14 mt-16 ">
        <article class="bg-Vary-Light-Gray pt-16 pb-12 px-4 relative">
            <img src={image} className="absolute w-24 aspect-square -top-12 inset-x-0 mx-auto"/>
            <h3 className="text-xl mb-4 pt-2 font-bold text-Very-Dark-Blue">
                {name}
            </h3>
            <p className="text-Dark-Grayish-Blue">
                {description}
            </p>
        </article>

    </div>
  )
}
