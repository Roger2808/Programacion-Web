# Programación Web - Tarea Migraciones Django

## Rama
La rama utilizada para esta tarea es: **hw-05**

---

## Descripción del proyecto
Este proyecto tiene como objetivo practicar el uso de **migraciones en Django** en un entorno de trabajo productivo.  
Se creó un proyecto Django con una aplicación principal llamada `core`.  
Se implementaron **cuatro modelos** con relaciones entre ellos utilizando **llaves foráneas**, y cada cambio fue registrado mediante migraciones separadas.


## Modelos y relaciones
Se crearon los siguientes modelos:

1. **Author** (modelo principal)  
   - Campos:  
     - `id` (Primary Key, auto)  
     - `name` (CharField)  
     - `bio` (TextField)  
     - `created_at` (DateTimeField)  

2. **Book**  
   - Campos:  
     - `id` (Primary Key, auto)  
     - `author` (ForeignKey a `Author`)  
     - `title` (CharField)  
     - `summary` (TextField)  
     - `created_at` (DateTimeField)  

3. **Chapter**  
   - Campos:  
     - `id` (Primary Key, auto)  
     - `book` (ForeignKey a `Book`)  
     - `number` (IntegerField)  
     - `title` (CharField)  
     - `status` (CharField)  

4. **Page**  
   - Campos:  
     - `id` (Primary Key, auto)  
     - `chapter` (ForeignKey a `Chapter`)  
     - `content` (TextField)  
     - `updated_at` (DateTimeField)  

## Migraciones
- Migración 1: Creación de `Author`  
- Migración 2: Creación de `Book` con ForeignKey a `Author`  
- Migración 3: Creación de `Chapter` con ForeignKey a `Book`  
- Migración 4: Creación de `Page` con ForeignKey a `Chapter`  

## Diagrama de base de datos

### Diagrama final de relaciones
![Diagrama de modelos](myapp_models.png)

> El diagrama fue generado usando `django-extensions` y `graph_models`.

