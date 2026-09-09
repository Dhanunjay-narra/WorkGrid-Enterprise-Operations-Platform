export type DmsOcrProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrProfileStateMachine {
  private allowedTransitions: Record<DmsOcrProfileState, DmsOcrProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrProfileState, to: DmsOcrProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrProfileState, to: DmsOcrProfileState): DmsOcrProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrProfile: " + from + " -> " + to);
    }
    return to;
  }
}
