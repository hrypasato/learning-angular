export interface Country {
    name:         Name;
    cca2:         string;
    capital:      string[];
    altSpellings: string[];
    borders?:      string[];
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: NativeName };
}

export interface NativeName {
    official: string;
    common:   string;
}
