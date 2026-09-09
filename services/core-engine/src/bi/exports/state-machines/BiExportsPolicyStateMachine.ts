export type BiExportsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsPolicyStateMachine {
  private allowedTransitions: Record<BiExportsPolicyState, BiExportsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsPolicyState, to: BiExportsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsPolicyState, to: BiExportsPolicyState): BiExportsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
