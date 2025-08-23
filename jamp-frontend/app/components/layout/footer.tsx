import { CONTACT_INFO, FOOTER_SECTIONS, UI_TEXT } from '@/app/constants'
import React from 'react'

export default function Footer() {
    return (
        <div className='px-4 space-y-12'>
            <div className="flex sm:flex-row flex-col sm:items-start justify-between  text-roboto-gray">
                <div className="text-sm space-y-1 sm:block flex">
                    <div>Tel: {CONTACT_INFO.phone}</div>
                    <div>{CONTACT_INFO.address.line1}</div>
                    <div>{CONTACT_INFO.address.line2}</div>
                </div>
                <div className="text-sm">
                    {CONTACT_INFO.email}
                </div>

                {/* Newsletter Section */}
                <div className="space-y-3">
                    <h3 className="text-sm">{UI_TEXT.newsletter}</h3>

                    {/* Search/Email Input and Subscribe Button */}
                    <div className="space-x-1 space-y-1">
                        <input
                            type="email"
                            placeholder={UI_TEXT.placeholder}
                            className="flex-1 px-4 py-2 border-0 bg-white text-sm focus:outline-none w-64"
                        />
                        <button
                            className="px-6 py-2  text-sm bg-white"
                        >
                            {UI_TEXT.button}
                        </button>
                    </div>
                    <label className="flex items-center text-xs cursor-pointer">
                        <input
                            type="checkbox"
                            className="mr-2 size-3"
                        />
                        {UI_TEXT.privacy}
                    </label>
                </div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  gap-4'>
                {FOOTER_SECTIONS.map((section) => (
                    <div key={section.section} className="space-y-6">
                        {section.groups.map((group, idx) => (
                            <div key={idx} className="space-y-2 border-t border-roboto-secondary-gray">
                                {group.title && <h4 className="font-medium">{group.title}</h4>}
                                <ul className="text-sm text-roboto-gray space-y-1">
                                    {group.links.map((link, i) => (
                                        <li key={i}>
                                            <a href={link.href}>{link.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}

            </div>
        </div>
    )
}
