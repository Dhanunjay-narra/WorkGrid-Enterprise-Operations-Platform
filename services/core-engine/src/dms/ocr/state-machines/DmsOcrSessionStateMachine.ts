export type DmsOcrSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrSessionStateMachine {
  private allowedTransitions: Record<DmsOcrSessionState, DmsOcrSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrSessionState, to: DmsOcrSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrSessionState, to: DmsOcrSessionState): DmsOcrSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrSession: " + from + " -> " + to);
    }
    return to;
  }
}
