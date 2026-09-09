export type BiExportJobState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class BiExportJobStateMachine {
  private validTransitions: Record<BiExportJobState, BiExportJobState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: BiExportJobState, next: BiExportJobState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: BiExportJobState, next: BiExportJobState): BiExportJobState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for BiExportJob: from " + current + " to " + next);
    }
    return next;
  }
}
