export type ProjectSprintsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsPayloadStateMachine {
  private allowedTransitions: Record<ProjectSprintsPayloadState, ProjectSprintsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsPayloadState, to: ProjectSprintsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsPayloadState, to: ProjectSprintsPayloadState): ProjectSprintsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
