export class movies {
  public Id: number;
  public Title: string;
  public Director: string;
  public GenreId: number;
  public Genre: string;
  public Synopsis: string;
  public Year: number;
}

export class genres {
  public Id: number;
  public Description: string;
  public Active: boolean;
}
