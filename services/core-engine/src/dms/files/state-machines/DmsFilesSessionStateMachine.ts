export type DmsFilesSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesSessionStateMachine {
  private allowedTransitions: Record<DmsFilesSessionState, DmsFilesSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesSessionState, to: DmsFilesSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesSessionState, to: DmsFilesSessionState): DmsFilesSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesSession: " + from + " -> " + to);
    }
    return to;
  }
}
