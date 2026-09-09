export type DmsExportMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportMappingStateMachine {
  private allowedTransitions: Record<DmsExportMappingState, DmsExportMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportMappingState, to: DmsExportMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportMappingState, to: DmsExportMappingState): DmsExportMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportMapping: " + from + " -> " + to);
    }
    return to;
  }
}
