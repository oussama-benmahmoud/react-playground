///<reference path="result.ts"/>

class Scoreboard {
    private _results: Result[] = [];

    addResult(newResult: Result): void {
        this._results.push(newResult);
    }

    updateScoreboard():void {
        let output: string = '<h2>Scoreboard</h2>';

        for (let index = 0; index < this._results.length; index++) {
            let result: Result = this._results[index];
            output += '<h4>';
            output += result.playerName + ': ' + result.score + ' /' + result.problemCount + ' for factor ' + result.factor;
            output += '</h4>';
        }

        const scoreElement: HTMLElement  = <HTMLElement>document.getElementById('scores');
        scoreElement.innerHTML = output;
    }
}