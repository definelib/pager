$(document.body).append(`
<template id="tpl-Pager">
    <ul id="{id}" {class} {dataset} {style}>
        <li data-id="nav" class="nav">
            <template name="nav" placeholder="nav">
                <button data-cmd="prev" {prev-disabled} class="arrow prev" title="上一页">
                    <i></i>
                </button>
                
                <template name="region" placeholder="regions">
                    <template name="item">
                        <button data-no="{no}" class="{on}">{no}</button>
                    </template>
                    <template name="more">
                        <button disabled class="more"></button>
                    </template>
                </template>
                
                <button data-cmd="next" {next-disabled} class="arrow next" title="下一页">
                    <i></i>
                </button>
            </template>
        </li>

        <li data-id="stat" class="stat">
            <template name="stat" placeholder="stat">
                总<span>{total}</span>条，共<span>{maxNo}</span>页，每页
                <select id="{sizerId}">
                    <template name="size" placeholder="sizes">
                        <option {selected}>{value}</option>
                    </template>
                </select>
            </template>
        </li>

        <li data-id="jump" class="jump">
            <template name="jump" placeholder="jump">
                <span>跳到：</span>
                <input id="{txtId}" type="text" value="{value}" />
                <button {disabled} data-cmd="to">GO</button>
            </template>
        </li>
    </ul>
</template>



 `);