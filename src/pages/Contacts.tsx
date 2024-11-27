import React from 'react';
import Block from "../components/UI/block/Block";

const Contacts = () => {
    return (
        <div
            style={{width:'100%'}}
        >
            <div
            >
                <div className="con-t"
                     style={{width: '100%'}}
                >
                    <h1>Адрес</h1>
                    <div
                        style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem'}}
                    >
                        <div style={{position: "relative", overflow: "hidden"}}><a
                            href="https://yandex.ru/maps/org/geekbrains/1402263817/?utm_medium=mapframe&utm_source=maps"
                            style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0px"}}>GeekBrains</a><a
                            href="https://yandex.ru/maps/213/moscow/category/business_school/184105472/?utm_medium=mapframe&utm_source=maps"
                            style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}>Бизнес-школа в
                            Москве</a>
                            <iframe
                                src="https://yandex.ru/map-widget/v1/org/geekbrains/1402263817/?ll=37.536922%2C55.796562&z=14"
                                width="560" height="400" frameBorder="1"
                                style={{position: "relative"}}></iframe>
                        </div>
                        <div>
                            <h2>Приходите к нам!</h2>
                            <p>Москва, Ленинградский проспект, 39, стр. 79</p>
                        </div>
                    </div>
                </div>
                <div className="con-b"
                     style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', flexDirection: 'column'}}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            gap: '2rem',
                        }}
                    >
                        <Block body="+ 7 922 881-48-54" title="Бесплатно по России"></Block>
                        <Block body="+ 7 499 231-48-53" title="Бесплатно по Москве"></Block>
                    </div>
                    <Block body="intoit@gmail.com" title="Напишите нам!"></Block>
                </div>
            </div>
        </div>
    );
};

export default Contacts;