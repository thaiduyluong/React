import './Layout.scss';

function Layout({ children }) {
    return (
        <main className='wrapLayout'>
            <div className='container '>{children}</div>
        </main>
    );
}

export default Layout;
