export type DmsSignaturesConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesConfigStateMachine {
  private allowedTransitions: Record<DmsSignaturesConfigState, DmsSignaturesConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesConfigState, to: DmsSignaturesConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesConfigState, to: DmsSignaturesConfigState): DmsSignaturesConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesConfig: " + from + " -> " + to);
    }
    return to;
  }
}
