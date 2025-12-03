import * as SQLite from 'expo-sqlite';

export const getDBConnection = async () => {
  return SQLite.openDatabase('meubanco.db');
}; 

export const createPacienteTable = async (db) => {
        db.transaction((tx) => {
            tx.executeSql(
                    `CREATE TABLE IF NOT EXISTS Paciente (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nome TEXT NOT NUL
                );`
            );
        });
    };