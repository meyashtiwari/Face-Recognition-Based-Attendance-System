<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function option1Click() {
        document.getElementById('option1').classList.add('active');
        document.getElementById('option2').classList.remove('active');
        document.getElementById('option3').classList.remove('active');
    }
    function option2Click() {
        document.getElementById('option1').classList.remove('active');
        document.getElementById('option2').classList.add('active');
        document.getElementById('option3').classList.remove('active');
    }
    function option3Click() {
        document.getElementById('option1').classList.remove('active');
        document.getElementById('option2').classList.remove('active');
        document.getElementById('option3').classList.add('active');
    }
</script>

<div class="pane-sm sidebar">
    <nav class="nav-group">
        <h5 class="nav-group-title">Application Menu</h5>
        <span id="option1" on:click={option1Click} on:click="{() => dispatch('notify', 'adduser')}" class="nav-group-item active">
            <span class="icon icon-user-add"></span>
            Add a New Student
        </span>
        <span id="option2" on:click={option2Click} on:click="{() => dispatch('notify', 'markattendance')}" class="nav-group-item">
            <span class="icon icon-check"></span>
            Mark Attendance
        </span>
        <span id="option3" on:click={option3Click} on:click="{() => dispatch('notify', 'checkattendance')}" class="nav-group-item">
            <span class="icon icon-book-open"></span>
            Check Attendance
        </span>
    </nav>
</div>
