export type DmsOcrConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrConfigStateMachine {
  private allowedTransitions: Record<DmsOcrConfigState, DmsOcrConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrConfigState, to: DmsOcrConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrConfigState, to: DmsOcrConfigState): DmsOcrConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrConfig: " + from + " -> " + to);
    }
    return to;
  }
}
