import React from 'react';

const OCard = () => {
    return (
        <div className="ofCards">
            <div className="l-oc">
                <div className="o-card">
                    <div className="top">
                        <p>Высокооплачиваемо</p>
                    </div>
                    <div className="bottom">
                        <p>Зарплата начинающего ИТ-специалиста — от 60 000 ₽. А уже через три года — от 150 000 ₽</p>
                    </div>
                    <img src="../assets/images/coin.png" alt="coin"/>
                </div>
            </div>
            <div className="r-oc">
                <div className="o-card">
                    <div className="top">
                        <p>Востребовано</p>
                    </div>
                    <div className="bottom">
                        <p>Количество вакансий для ИТ-специалистов в России в 2023 году выросло на 63%.</p>
                    </div>
                </div>
                <div className="o-card">
                    <div className="top">
                        <p>Перспективы</p>
                    </div>
                    <div className="bottom">
                        <p>ИТ-специалисты остаются лидерами по востребованности на рынках – как в России, так и за
                            рубежом.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OCard;