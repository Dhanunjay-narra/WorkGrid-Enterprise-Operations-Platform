export type ProjectSprintsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsMappingStateMachine {
  private allowedTransitions: Record<ProjectSprintsMappingState, ProjectSprintsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsMappingState, to: ProjectSprintsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsMappingState, to: ProjectSprintsMappingState): ProjectSprintsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
