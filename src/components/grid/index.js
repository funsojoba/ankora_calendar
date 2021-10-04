import { Main, GridDiv, GridChild } from './style'
import NameCard from "../nameCard"
import Form from '../form'
import Appointment from '../appointment'
import { useState } from 'react'

const Grid = () => {
    const [openForm, setOpenForm] = useState(false)

    const closeForm = () => {
        setOpenForm(false)
        console.log(openForm)
    }

    const openFormDiv = () => {
        setOpenForm(true)
    }
    const logGrid = (e)=>{
        console.log(e.target.getAttribute('name'))
        openFormDiv()
    }

    return <Main>
        <Appointment
            time="20 Aug, 2021 8:30am  - 20 Aug, 2020 9:30am "
            patient="Arnold Ronald"
            doctor="Dr Mayowa Afolabi"
            title="Full Checkup"
            patientCardBackground="#FFF1D6"
            patientImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            doctorImage="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        />

        <Form display={openForm && 'block'} close={closeForm} />
        <GridDiv>
            <GridChild>
                <NameCard
                    background="#D3E5FF"
                    name="Davi K."
                    image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                />
            </GridChild>
            <GridChild>
                <NameCard
                    background="#FFD3D9"
                    name="Clement Q."
                    image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                />
            </GridChild>
            <GridChild>
                <NameCard
                    background="#E1D3FF"
                    name="Octa Devor"
                    image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                />
            </GridChild>
            <GridChild>
                <NameCard
                    background="#FFE8D3"
                    name="Halia Satun"
                    image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                />
            </GridChild>
            <GridChild name="grid 5" onClick={(e)=>logGrid(e)}>Item 5</GridChild>
            <GridChild name="grid 6" onClick={(e)=>logGrid(e)}>Item 6</GridChild>
            <GridChild name="grid 7" onClick={(e)=>logGrid(e)}>Item 7</GridChild>
            <GridChild>Item 8</GridChild>
            <GridChild>Item 9</GridChild>
            <GridChild>Item 10</GridChild>
            <GridChild>Item 11</GridChild>
            <GridChild>Item 12</GridChild>
            <GridChild>Item 13</GridChild>
            <GridChild>Item 14</GridChild>
            <GridChild>Item 15</GridChild>
            <GridChild>Item 16</GridChild>
            <GridChild>Item 17</GridChild>
            <GridChild>Item 18</GridChild>
            <GridChild>Item 19</GridChild>
            <GridChild>Item 20</GridChild>
            <GridChild>Item 21</GridChild>
            <GridChild>Item 22</GridChild>
            <GridChild>Item 23</GridChild>
            <GridChild>Item 24</GridChild>
            <GridChild>Item 25</GridChild>
            <GridChild>Item 26</GridChild>
            <GridChild>Item 27</GridChild>
            <GridChild>Item 28</GridChild>
            <GridChild>Item 29</GridChild>
            <GridChild>Item 30</GridChild>
            <GridChild>Item 31</GridChild>
            <GridChild>Item 32</GridChild>
            <GridChild>Item 33</GridChild>
            <GridChild>Item 34</GridChild>
            <GridChild>Item 35</GridChild>
            <GridChild>Item 36</GridChild>
            <GridChild>Item 37</GridChild>
            <GridChild>Item 38</GridChild>
            <GridChild>Item 39</GridChild>
            <GridChild>Item 40</GridChild>
            <GridChild>Item 41</GridChild>
            <GridChild>Item 42</GridChild>
            <GridChild>Item 43</GridChild>
            <GridChild>Item 44</GridChild>
            <GridChild>Item 45</GridChild>
            <GridChild>Item 46</GridChild>
            <GridChild>Item 47</GridChild>
            <GridChild>Item 48</GridChild>
            <GridChild>Item 49</GridChild>
            <GridChild>Item 50</GridChild>
            <GridChild>Item 51</GridChild>
            <GridChild>Item 52</GridChild>
            <GridChild>Item 53</GridChild>
            <GridChild>Item 54</GridChild>
            <GridChild>Item 55</GridChild>
            <GridChild>Item 56</GridChild>
            <GridChild>Item 57</GridChild>
            <GridChild>Item 58</GridChild>
            <GridChild>Item 59</GridChild>
            <GridChild>Item 60</GridChild>
            <GridChild>Item 61</GridChild>
            <GridChild>Item 62</GridChild>
            <GridChild>Item 63</GridChild>
            <GridChild>Item 64</GridChild>
            <GridChild>Item 65</GridChild>
            <GridChild>Item 66</GridChild>
            <GridChild>Item 67</GridChild>
            <GridChild>Item 68</GridChild>
            <GridChild>Item 69</GridChild>
            <GridChild>Item 70</GridChild>
            <GridChild>Item 71</GridChild>
            <GridChild>Item 72</GridChild>
        </GridDiv>
    </Main>
}

export default Grid