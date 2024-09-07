export default function SigninWithSocialMediaButton({ name, logo }) {
    return (
        <button
            className="flex items-center justify-center gap-x-2.5 rounded-md border border-solid border-x-[gainsboro] border-y-[gainsboro] px-[40px] py-[13px]">
            <img src={`src/assets/logo/socialmedia/${logo}`} className="h-6 flex-shrink-0" alt={`${name} logo`} />
            <div className="flex-shrink-0 whitespace-nowrap">Sign in with {name}</div>
        </button>
    )
}
