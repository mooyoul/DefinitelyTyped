export = UpdateScript;
declare function UpdateScript(): void;
declare class UpdateScript {
    private connection_;
    private scriptKey;
    source: Connection;
    sourceDB: Database;
    target: Connection;
    targetDB: Database;
    private versions_;
    private sysEvent_;
    result: string;
    private state_;
    private result_;
    private logger_;
    finish(result: string, updateVersion: number): void;
    fail(error: Error): void;
    private getGlobalObject_;
    private prepare_;
    private createSysEvent_;
    getProductFromKey(key: number): number | null;
    copyChildrenViewPermissions(directoryKey: number): number;
}
import Connection = require('@nginstack/engine/lib/connection/Connection.js');
import Database = require('@nginstack/engine/lib/database/Database.js');
