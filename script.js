let member = document.getElementsByClassName('member-photo')[0]
let names = document.getElementsByClassName('team-member')[0]
let position = document.getElementsByClassName('team-position')[0]
let count = 0


const memberArray = [
    {
        img: 'images/hency.jpg',
        name: 'Sandesh Neupane',
        position: 'Graphic designer'
    },
    {
        img: 'images/hency2.jfif',
        name: 'Bishwo',
        position: 'Senior web developer'
    },
    {
        img: 'images/hency3.jpeg',
        name: 'Sulav Neupane',
        position: 'Junior Web developer'
    },
    {
        img: 'images/hency4.jfif',
        name: 'Shishir Rana',
        position: 'Content writer'
    },
    {
        img: 'images/hency5.jpg',
        name: 'Shiddhanta Bhandari',
        position: 'Digital Marketing lead'
    },
]

const transition = () => {
    setInterval(() => {
        if (count == memberArray.length) {
            count = 0
        }
        member.style.background = `url('${memberArray[count].img}') center/cover no-repeat`
        names.innerText = memberArray[count].name
        position.innerText = memberArray[count].position
        count++
    }, 2000);
}

transition()