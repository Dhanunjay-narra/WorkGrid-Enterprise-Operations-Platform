export type DmsExportPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportPayloadStateMachine {
  private allowedTransitions: Record<DmsExportPayloadState, DmsExportPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportPayloadState, to: DmsExportPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportPayloadState, to: DmsExportPayloadState): DmsExportPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportPayload: " + from + " -> " + to);
    }
    return to;
  }
}
