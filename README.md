# Simple class schedule viewer
## Features:
1. Add Activities
2. show week number, current time, day, month, week and specific time
3. Go back to the current week
4. show details of courses and activities
## How to use
### Open the project
Type this command in your terminal
```shell
git clone https://github.com/xh1y/Timetable.git
```
Open it with ``vscode``, ``webstorm``, etc., and type the following command in the terminal.
```shell
npm i
npm run dev
```
Open your browser and you will see it.
### Add activity
Scroll up to expand the class list.  
On the right side there is a plus icon, click on the icon to go to another page.  
Enter the title and detail, and select the number of weeks and specific times  
(I'm currently using my own data for the next semester, if you want to change it, please modify the ``classLists`` in ``src/data/index.ts`` in the format of the IClass interface ``src/types/types.ts``).
```ts
interface IClass {
    name: string
    teacher: string
    detailTimeAndPlace: {
        places: string
        week: number[]
        time: CourseOneDay[]
        time: CourseOneDay[]
    }[]
    compulsory: boolean
}

type CourseOneDay = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
```

### Show current time
In order to simulate the time of the next semester, the time is set to December 8, 2024.  
If you need to change it, you can go to ``src/assets/constant/constants.ts`` to modify the variable ``nowDate``.  
> Note: If the nowDate is earlier than the start time, the schedule opens for the first week, and if the nowDate is later than the set end time (there is a totalWeek in ``src/data/index.ts`` to control the end time), the schedule opens for the last week.

At the top of the page there is the current time, the date is the date set in ``src/assets/constant/constants.ts``, and the hours, minutes, and seconds are the current time.
### Go back to the current week
Click the Back to this week button to return to the week of the date defined inside ``src/assets/constant/constants.ts``.
> Note: the nowDate type is MyDate, which is implemented in ``src/assets/MyDate.ts``, and the constructor of MyDate accepts either one or three parameters, a timestamp when it accepts one parameter, and a year, month, and day when it accepts three parameters.
### Show details
Click a course on the schedule or a custom event.  
When the clicked course is a course, it displays the course name, location, teacher, number of weeks, class time, and whether it is mandatory or not.  
And when the event is clicked, it displays the title, detail, and time.
## Catalog structure
```text
Tree
|   .eslintrc.cjs  
|   .gitignore  
|   index.html  
|   package-lock.json  
|   package.json  
|   README.md  
|   tsconfig.app.json  
|   tsconfig.json  
|   tsconfig.node.json  
|   vite.config.ts  
|       
\---src
    |   App.tsx
    |   main.tsx
    |   
    +---assets
    |   +---constant
    |   |       constants.ts
    |   |       
    |   +---function
    |   |       getAccurateDate.ts
    |   |       getQuery.ts
    |   |       MyDate.ts
    |   |       sortData.ts
    |   |       
    |   \---svg
    |           add-new-item.tsx
    |           left-arrow.tsx
    |           right-arrow-with-left-.tsx
    |           right-arrow.tsx
    |           
    +---components
    |   +---component-box
    |   |       ComponentBox.tsx
    |   |       style.ts
    |   |       
    |   +---input-box
    |   |       index.tsx
    |   |       styles.ts
    |   |       
    |   \---small-box-in-table
    |           index.tsx
    |           styles.ts
    |           
    +---data
    |       addData.ts
    |       index.ts
    |       
    +---router
    |       index.tsx
    |       
    +---services
    |   |   index.ts
    |   |   
    |   \---request
    |           config.ts
    |           index.ts
    |           
    +---stores
    |   |   index.ts
    |   |   
    |   \---modules
    |       +---all-update
    |       |       all-update.ts
    |       |       
    |       \---home
    |               home.ts
    |               
    +---types
    |       types.ts
    |       
    \---views
        +---Add-detail-information
        |       AddDetail.tsx
        |       styles.ts
        |       
        +---Add-title-page
        |       AddTitle.tsx
        |       styles.ts
        |       
        +---Error
        |       ErrorPage.tsx
        |       
        +---Home
        |   |   home-style.ts
        |   |   Home.tsx
        |   |   
        |   \---child-components
        |       \---show-courses
        |           |   index.tsx
        |           |   styles.tsx
        |           |   
        |           \---child-components
        |               +---Information-box
        |               |       index.tsx
        |               |       styles.ts
        |               |       
        |               +---left-show-time
        |               |       index.tsx
        |               |       styles.ts
        |               |       
        |               +---right-show-courses
        |               |       index.tsx
        |               |       styles.ts
        |               |       
        |               +---top-show-date-month
        |               |       index.tsx
        |               |       styles.ts
        |               |       
        |               \---top-show-week
        |                       index.tsx
        |                       styles.ts
        |                       
        +---Time
        |       index.tsx
        |       styles.ts
        |       
        \---Total
            styles.ts
            Total.tsx
```   