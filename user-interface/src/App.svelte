<script context="module">
    import Header from './components/Header.svelte';
    import Sidebar from './components/Sidebar.svelte';
    import Footer from './components/Footer.svelte';
    import AddStudent from './components/AddStudent.svelte';
    import MarkAttendance from './components/MarkAttendance.svelte';
    import CheckAttendance from './components/CheckAttendance.svelte';
    const { ipcRenderer } = require("electron");
</script>

<script>
    function handleFooter(event) {
        if(event.detail == 'about') {
            ipcRenderer.send('showAbout');
        }
        else {
            ipcRenderer.send('closeApp');
        }
    }


    let option = 1;
    function handleSidebar(event) {
        if (event.detail == 'adduser') {
            option = 1;
            document.getElementById('content').classList.add('no-table');
        }
        else if (event.detail == 'markattendance') {
            option = 2;
            document.getElementById('content').classList.add('no-table');
        }
        else {
            option = 3;
            document.getElementById('content').classList.remove('no-table');
        }
    }
</script>

<main>
    <div class="window">
        <Header />
        <div class="window-content">
            <div class="pane-group">
                <Sidebar on:notify={handleSidebar}/>
                <div id="content" class="pane no-table">
                    {#if option == 1}
                        <AddStudent />
                    {:else if option == 2}
                        <MarkAttendance />
                    {:else}
                        <CheckAttendance />
                    {/if}
                </div>
            </div>
        </div>
        <Footer on:notify={handleFooter}/>
    </div>
</main>

<style>
	.no-table {
		display: flex;
		justify-content: center;
		align-self: center;
	}
</style>