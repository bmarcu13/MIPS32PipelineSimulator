package Exception;

public class TranslationError extends Exception {
    String details;
    public TranslationError(String details) {
        super(details);
        this.details = details;
    }
}
