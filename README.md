# CryptoCats

## Описание
CryptoCats — это задача, в которой участникам предстоит найти флаг, который скрыт внутри фотографии, которую можно получить только расшифровав послание

## Теги
- Hidden data
- Cryptography

## Легенда
Исследуя просторы даркнета, вы наткнулись на странный сайт, содержащий одну форму и какое-то зашифрованное сообщение. Может быть это второе пришествие Cicada 3301? Необходимо выяснить...

## Инструкция по развертыванию (для администраторов)

1. **Склонируйте репозиторий**:
    ```sh
     https://github.com/ilyainavoid/CTF-project.git
    ```

2. **Перейдите в директорию проекта**

3. **Разместите зашифрованное сообщение в файле `.env` (по желанию)**:
    - Обновите значение переменной VITE_KEY_PHRASE

5. **Соберите Docker образ**:
    ```sh
    docker build -t ctf-app .
    ```

6. **Запустите контейнер**:
    ```sh
    docker run -d -p 5173:5173 --name ctf-app ctf-app
    ```

7. **Убедитесь, что контейнер запущен и приложение доступно**:
    - Откройте браузер и перейдите по адресу `http://localhost:5173`.
    - Проверьте, что приложение работает корректно.

## Флаг
Флаг в формате: `HITS{your_flag_here}`

## Инструкция как подложить флаг
1. Откройте директорию `src/assets/`
2. Добавьте фотографию и добавьте путь к ней в свойство src= `"src/assets/<picture_name>"`
3. Выполните команду `echo "HITS{FLAG_HERE}" >> "<picture_name>"` чтобы добавить флаг

## Эмпирическая оценка сложности
Уровень сложности: Easy

## Инструкция по прорешиванию и получению флага
1. Необходимо расшифровать сообщение, которое каждые несколько секунд шифруется шифром Цезаря с рандомным сдвигом
2. Следуя инструкции из сообщения, ввести кодовую фразу в поле для ввода и нажать на кнопку
3. Появившуюся фотографию необходимо скачать и открыть в любом текстовом редакторе
4. В конце файла будет находится флаг

