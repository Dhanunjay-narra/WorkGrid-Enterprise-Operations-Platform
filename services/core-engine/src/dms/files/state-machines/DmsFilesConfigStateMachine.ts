export type DmsFilesConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesConfigStateMachine {
  private allowedTransitions: Record<DmsFilesConfigState, DmsFilesConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesConfigState, to: DmsFilesConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesConfigState, to: DmsFilesConfigState): DmsFilesConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesConfig: " + from + " -> " + to);
    }
    return to;
  }
}
