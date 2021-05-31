<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
</script>

<footer class="toolbar toolbar-footer">
    <div class="toolbar-actions">
        <button on:click="{() => dispatch('notify', 'about')}" class="btn btn-default">
            <span class="icon icon-info-circled icon-text"></span>About
        </button>
        <button on:click="{() => dispatch('notify', 'quit')}" class="btn btn-negative pull-right">Quit</button>
    </div>
</footer>