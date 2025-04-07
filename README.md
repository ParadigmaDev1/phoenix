напоминалка по git

# Обновление ветки Название_Ветки с учетом последних изменений в main

git checkout main # Переключаемся на main
git pull origin main # Загружаем последние изменения с удаленного репозитория
git checkout Название*Ветки # Возвращаемся в вашу ветку
git merge main # Сливаем main в Название*Ветки

# Отправить обновленную ветку Название_Ветки на GitHub

git push origin Название_Ветки

# Слить Название_Ветки в main

git checkout main
git merge Название_Ветки
git push origin main
