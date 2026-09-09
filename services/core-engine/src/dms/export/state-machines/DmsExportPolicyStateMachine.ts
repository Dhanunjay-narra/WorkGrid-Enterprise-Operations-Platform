export type DmsExportPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportPolicyStateMachine {
  private allowedTransitions: Record<DmsExportPolicyState, DmsExportPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportPolicyState, to: DmsExportPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportPolicyState, to: DmsExportPolicyState): DmsExportPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
