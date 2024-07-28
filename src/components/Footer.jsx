import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { CopyrightIcon } from "lucide-react";
const Footer = () => {
    return (
        <footer className="mt-20 border-t py-10 border-r-neutral-700">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <h3 className="text-md font-semibold mb-4 inline-block">Resources</h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((link, index) => (
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4 inline-block">Platform</h3>
                    <ul className="space-y-2">
                        {platformLinks.map((link, index) => (
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4 inline-block">Community</h3>
                    <ul className="space-y-2">
                        {communityLinks.map((link, index) => (
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="w-full flex border-t-[1px] border-neutral-800 my-10  py-5 items-center justify-center text-center text-sm font-light text-neutral-500">
                <CopyrightIcon />
                <p className="ml-2">2024 VirtualR | All Rights Reserved</p>
            </div>



        </footer>
    )
}

export default Footer