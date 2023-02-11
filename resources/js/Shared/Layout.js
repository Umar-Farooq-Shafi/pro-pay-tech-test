import React from 'react';
import Helmet from 'react-helmet';

import FlashMessages from '@/Shared/FlashMessages';
import TopHeader from '@/Shared/TopHeader';
import BottomHeader from '@/Shared/BottomHeader';

export default function Layout({ title, children }) {
    return (
        <div>
            <Helmet titleTemplate="%s | Ping CRM" title={title} />

            <div className="flex flex-col">
                <div className="flex flex-col h-screen">
                    <div className="md:flex">
                        <TopHeader />
                        <BottomHeader />
                    </div>

                    <div className="flex flex-grow overflow-hidden">
                        <div className="w-full px-4 py-8 overflow-hidden overflow-y-auto md:p-12">
                            <FlashMessages />

                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
