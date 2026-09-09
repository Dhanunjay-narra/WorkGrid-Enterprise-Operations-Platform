export type DmsFilesPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesPolicyStateMachine {
  private allowedTransitions: Record<DmsFilesPolicyState, DmsFilesPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesPolicyState, to: DmsFilesPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesPolicyState, to: DmsFilesPolicyState): DmsFilesPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
