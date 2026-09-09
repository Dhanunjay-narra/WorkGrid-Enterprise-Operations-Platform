export type DmsExportNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportNodeStateMachine {
  private allowedTransitions: Record<DmsExportNodeState, DmsExportNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportNodeState, to: DmsExportNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportNodeState, to: DmsExportNodeState): DmsExportNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportNode: " + from + " -> " + to);
    }
    return to;
  }
}
