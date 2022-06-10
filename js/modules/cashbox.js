//module starts

let ticket = document.querySelector('.ticket')
ticket.innerHTML = `<a href="#" class="form__area"></a>
<form action="#" method="post" name="ticket-body" class="ticket__body">
        <a href="#" class="form__close">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z"/></svg>
        </a>
        <div class="ticket__row">
            <h2 class="ticket__heading">Вишневый сад</h2>   
        </div>
        <div class="ticket__row">
                <div class="ticket__date">8 июня, среда, 19:00</div>
            <div class="ticket__text">Театр имени Уильяма Шекспира - Россия, Москва,  улица имени Шекспира, 4</div>
        </div>
        <div class="ticket__row">
            <button class="ticket__button" type="button">Купить билет</button>
            <div class="ticket__subrow">
                <span>Ряд: <select name="select" id="row">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                </select></span>
                <span>Место: <select name="select" id="place">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                </select></span>
            </div>
        </div>
        <div class="ticket__row">
            <span>email: <input class="ticket__input" type="email" name="email" value=""></span>
        </div>
        <table class="table">
            <h4 class="ticket__title">СЦЕНА</h4>
            <tbody class="table__body">
            <tr class="table__row">
                <th class="table__heading">1</th>
                <td class="table__cell"><div class="table__button table__button_pink"><span>1</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>2</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>3</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>4</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>5</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>6</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>7</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>8</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>9</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>10</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>11</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>12</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>13</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>14</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>15</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>16</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>17</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>18</span></div></td>
                <th class="table__heading">1</th>
            </tr>
            <tr class="table__row">
                <th class="table__heading">2</th>
                <td class="table__cell"><div class="table__button table__button_pink"><span>1</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>2</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>3</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>4</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>5</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>6</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>7</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>8</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>9</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>10</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>11</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>12</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>13</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>14</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>15</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>16</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>17</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>18</span></div></td>
                <th class="table__heading">2</th>
            </tr>
            <tr class="table__row">
                <th class="table__heading">3</th>
                <td class="table__cell"><div class="table__button table__button_pink"><span>1</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>2</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>3</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>4</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>5</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>6</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>7</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>8</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>9</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>10</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>11</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>12</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>13</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>14</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>15</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>16</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>17</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>18</span></div></td>
                <th class="table__heading">3</th>
            </tr>
            <tr class="table__row">
                <th class="table__heading">4</th>
                <td class="table__cell"><div class="table__button table__button_pink"><span>1</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>2</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>3</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>4</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>5</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>6</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>7</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>8</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>9</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>10</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>11</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>12</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>13</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>14</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>15</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>16</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>17</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>18</span></div></td>
                <th class="table__heading">4</th>
            </tr>
            <tr class="table__row">
                <th class="table__heading">5</th>
                <td class="table__cell"><div class="table__button table__button_pink"><span>1</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>2</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>3</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>4</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>5</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>6</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>7</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>8</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>9</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>10</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>11</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>12</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>13</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>14</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>15</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>16</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>17</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>18</span></div></td>
                <th class="table__heading">5</th>
            </tr>
            <tr class="table__row">
                <th class="table__heading">6</th>
                <td class="table__cell"><div class="table__button table__button_pink"><span>1</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>2</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>3</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>4</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>5</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>6</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>7</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>8</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>9</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>10</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>11</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>12</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>13</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>14</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>15</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>16</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>17</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>18</span></div></td>
                <th class="table__heading">6</th>
            </tr>
            <tr class="table__row">
                <th class="table__heading">7</th>
                <td class="table__cell"><div class="table__button table__button_pink"><span>1</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>2</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>3</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>4</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>5</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>6</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>7</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>8</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>9</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>10</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>11</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>12</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>13</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>14</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>15</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>16</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>17</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>18</span></div></td>
                <th class="table__heading">7</th>
            </tr>
            <tr class="table__row">
                <th class="table__heading">8</th>
                <td class="table__cell"><div class="table__button table__button_pink"><span>1</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>2</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>3</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>4</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>5</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>6</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>7</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>8</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>9</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>10</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>11</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>12</span></div></td>
                <td class="table__cell"><div class="table__button table__button_red"><span>13</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>14</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>15</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>16</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>17</span></div></td>
                <td class="table__cell"><div class="table__button table__button_pink"><span>18</span></div></td>
                <th class="table__heading">8</th>
            </tr>
            <tr class="table__row">
                <th class="table__heading">9</th>
                <td class="table__cell"><div class="table__button table__button_orange"><span>1</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>2</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>3</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>4</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>5</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>6</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>7</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>8</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>9</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>10</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>11</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>12</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>13</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>14</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>15</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>16</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>17</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>18</span></div></td>
                <th class="table__heading">9</th>
            </tr>
            <tr class="table__row">
                <th class="table__heading">10</th>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>1</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>2</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>3</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>4</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>5</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>6</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>7</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>8</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>9</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>10</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>11</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>12</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>13</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>14</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>15</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>16</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>17</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>18</span></div></td>
                <th class="table__heading">10</th>
            </tr>
            <tr class="table__row">
                <th class="table__heading">11</th>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>1</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>2</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>3</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>4</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>5</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>6</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>7</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>8</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>9</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>10</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>11</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>12</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>13</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>14</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>15</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>16</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>17</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>18</span></div></td>
                <th class="table__heading">11</th>
            </tr>
            <tr class="table__row">
                <th class="table__heading">12</th>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>1</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>2</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>3</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>4</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>5</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>6</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>7</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>8</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>9</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>10</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>11</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>12</span></div></td>
                <td class="table__cell"><div class="table__button table__button_orange"><span>13</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>14</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>15</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>16</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>17</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>18</span></div></td>
                <th class="table__heading">12</th>
            </tr>
            <tr class="table__row">
                <th class="table__heading">13</th>
                <td class="table__cell"><div class="table__button table__button_purple"><span>1</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>2</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>3</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>4</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>5</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>6</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>7</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>8</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>9</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>10</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>11</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>12</span></div></td>
                <td class="table__cell"><div class="table__button table__button_yellow"><span>13</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>14</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>15</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>16</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>17</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>18</span></div></td>
                <th class="table__heading">13</th>
            </tr>
            <tr class="table__row">
                <th class="table__heading">14</th>
                <td class="table__cell"><div class="table__button table__button_purple"><span>1</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>2</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>3</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>4</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>5</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>6</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>7</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>8</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>9</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>10</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>11</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>12</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>13</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>14</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>15</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>16</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>17</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>18</span></div></td>
                <th class="table__heading">14</th>
            </tr>
            <tr class="table__row">
                <th class="table__heading">15</th>
                <td class="table__cell"><div class="table__button table__button_purple"><span>1</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>2</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>3</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>4</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>5</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>6</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>7</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>8</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>9</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>10</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>11</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>12</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>13</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>14</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>15</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>16</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>17</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>18</span></div></td>
                <th class="table__heading">15</th>
            </tr>   
            <tr class="table__row">
                <th class="table__heading">16</th>
                <td class="table__cell"><div class="table__button table__button_purple"><span>1</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>2</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>3</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>4</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>5</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>6</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>7</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>8</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>9</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>10</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>11</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>12</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>13</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>14</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>15</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>16</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>17</span></div></td>
                <td class="table__cell"><div class="table__button table__button_purple"><span>18</span></div></td>
                <th class="table__heading">16</th>
            </tr>
        </tbody>
        </table>
        <div class="ticket__row  ticket__row_center">
                <div class="ticket__line">
                    <div class="ticket__count ticket__count_first">1400</div>
                    <div class="ticket__count ticket__count_second">900</div>
                    <div class="ticket__count ticket__count_third">700</div>
                    <div class="ticket__count ticket__count_fourth">600</div>
                    <div class="ticket__count ticket__count_fifth">500</div>
                </div>
        </div>
</form>`

//module ends

//popup starts
let perfomanceBtn = document.querySelectorAll('.perfomance__button ')
let formClose = document.querySelector('.form__close')
let formArea = document.querySelector('.form__area')
let popup = document.querySelector('.ticket') 

perfomanceBtn.forEach((elem) => {
elem.addEventListener('click', () => {
    body.classList.toggle('lock')
    popup.classList.toggle('active')
    })
})

formClose.addEventListener('click', () => {
body.classList.toggle('lock')
popup.classList.toggle('active')
})
    
formArea.addEventListener('click', () => {
        body.classList.toggle('lock')
        popup.classList.toggle('active')
        })
        
//popup end

//cashbox starts
let ticketBtn = document.querySelector('.ticket__button')
let place = document.querySelector('#place')
let row = document.querySelector('#row')
let email = document.querySelector('.ticket__input')

//validation starts
ticketBtn.addEventListener('click', () => {
let emailStr = email.value
let emailArr = emailStr.split('')
let result = emailArr.filter(symb => symb === '@')
    if(email.value !== '') {
        (result[0] === '@') 
        ?alert(`Поздравляем, вы купили билет на спектакль, ваш ряд: ${row.value}, ваше место ${place.value}, билеты отправлены на почту ${email.value}`)
        :alert('Введите корректный email.')
    }
    else {
        alert('Пожалуйста, заполните поле email.')
    }
    })
    // ends

//cashbox end

