export type ProjectRisksPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksPayloadStateMachine {
  private allowedTransitions: Record<ProjectRisksPayloadState, ProjectRisksPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksPayloadState, to: ProjectRisksPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksPayloadState, to: ProjectRisksPayloadState): ProjectRisksPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksPayload: " + from + " -> " + to);
    }
    return to;
  }
}
