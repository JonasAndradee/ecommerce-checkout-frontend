export class StorageService {
  private readonly prefix = "malga_";

  save(key: string, data: any): void {
    try {
      localStorage.setItem(
        this.prefix + key,
        JSON.stringify({
          data,
          timestamp: new Date().toISOString(),
        })
      );
    } catch (error) {
      console.error("Failed to save form data:", error);
    }
  }

  load(key: string): { data: any; timestamp: string } | null {
    try {
      const item = localStorage.getItem(this.prefix + key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Failed to load form data:", error);
      return null;
    }
  }

  clear(key: string): void {
    localStorage.removeItem(this.prefix + key);
  }
}
