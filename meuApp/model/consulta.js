import * as SQLite from 'expo-sqlite';

export const getDBConnection = async () => {
  return SQLite.openDatabase('meubanco.db');
}; 

export const createPacienteTable = async (db) => {
        db.transaction((tx) => {
            tx.executeSql(
                    `CREATE TABLE IF NOT EXISTS Paciente (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    paciente_id INTEGER FOREIGN KEY REFERENCES paciente(id),
                    data DATE NOT NULL,
                    descricao TEXT NOT NULL
                );`
            );
        });
    };